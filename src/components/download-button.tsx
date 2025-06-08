import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@queue/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@queue/components/ui/dropdown-menu'
import { getFirebaseApps } from '@queue/lib/firebase'
import { formatExecutableName } from '@queue/utils/format-executable-name'
import { ChevronDown, Download } from 'lucide-react'

const downloadOptions = {
  linux: [
    {
      name: 'queue-optimization-calculator-1.0.14.AppImage',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-linux.AppImage',
    },
    {
      name: 'queue-optimization-calculator-1.0.14.freebsd',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-freebsd',
    },
    {
      name: 'queue-optimization-calculator-1.0.14.pacman',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-pacman',
    },
    {
      name: 'queue-optimization-calculator-1.0.14.x86_64.rpm',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator.rpm',
    },
    {
      name: 'queue-optimization-calculator_1.0.14_amd64.deb',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator.deb',
    },
  ],
  macos: [
    {
      name: 'queue-optimization-calculator-1.0.14.dmg',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-macos.dmg',
    },
    {
      name: 'Queue.Models.Calculator-1.0.14-arm64-mac.zip',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-macos-arm64.zip',
    },
  ],
  windows: [
    {
      name: 'queue-optimization-calculator-1.0.14-setup.exe',
      url: 'https://github.com/pedroaba/queue-optimization-calculator/releases/latest/download/queue-optimization-calculator-windows.exe',
    },
  ],
}

export async function DownloadButton() {
  const apps = await getFirebaseApps()
  if (apps) {
    const { firestore } = apps

    const links = await firestore.collection('links').get()
    const lastUpdate = links.docs.at(-1)

    if (lastUpdate) {
      const linkData = lastUpdate.data()
      if (linkData) {
        const { links } = linkData
        if (links) {
          downloadOptions.windows = links.windows.map((link: string) => {
            return {
              url: link,
            }
          })

          downloadOptions.linux = links.linux.map((link: string) => {
            return {
              url: link,
            }
          })

          downloadOptions.macos = links.macos.map((link: string) => {
            return {
              url: link,
            }
          })
        }
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button
          size="lg"
          className="cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
        >
          <Download className="mr-2 size-5" />
          Download Latest Release
          <ChevronDown className='ml-2 size-4 group-data-[state="open"]:rotate-180 transition-all duration-500' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 bg-slate-800/95 backdrop-blur-sm border-slate-700 shadow-2xl"
        align="center"
      >
        <DropdownMenuLabel className="text-slate-200 font-semibold">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLinux} className="size-4" />
            <span className="text-sm">Linux</span>
          </div>
        </DropdownMenuLabel>
        {downloadOptions.linux.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className="text-slate-300 hover:bg-slate-700/50 focus:bg-slate-700/50 cursor-pointer hover:text-slate-300"
            asChild
          >
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 w-full text-sm hover:!text-slate-50"
            >
              {formatExecutableName(option.url)}
            </a>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="bg-slate-700" />

        <DropdownMenuLabel className="text-slate-200 font-semibold">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faApple} className="size-4" />
            <span className="text-sm">MacOS</span>
          </div>
        </DropdownMenuLabel>
        {downloadOptions.macos.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className="text-slate-300 hover:bg-slate-700/50 focus:bg-slate-700/50 cursor-pointer hover:text-slate-300"
            asChild
          >
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 w-full text-sm hover:!text-slate-50"
            >
              {formatExecutableName(option.url)}
            </a>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="bg-slate-700" />

        <DropdownMenuLabel className="text-slate-200 font-semibold">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWindows} className="size-4" />
            <span className="text-sm">Windows</span>
          </div>
        </DropdownMenuLabel>
        {downloadOptions.windows.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className="text-slate-300 hover:bg-slate-700/50 focus:bg-slate-700/50 cursor-pointer hover:text-slate-300"
            asChild
          >
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 w-full text-sm hover:!text-slate-50"
            >
              {formatExecutableName(option.url)}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
