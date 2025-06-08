export function formatExecutableName(link: string): string {
  // Extrai o nome do arquivo do final do link
  const filename = link.split('/').pop() ?? ''

  // Remove a versão do nome (padrão: -1.0.14, _1.0.14, etc.)
  // Pega só o nome até o primeiro grupo de versão, preservando a extensão
  const regex = /^(.*?)([-_]\d+\.\d+\.\d+)?([-.a-zA-Z0-9]*)$/
  const match = filename.match(regex)

  if (!match) {
    return filename
  }

  // Nome do app, sem versão, e a extensão original
  const name = match[1]
  const ext = match[3]
  return name + ext
}
