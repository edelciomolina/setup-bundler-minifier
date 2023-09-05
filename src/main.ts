import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    // Triple check it's Windows process
    // Can't install VSWhere.exe for Ubuntu image etc..
    const IS_WINDOWS = process.platform === 'win32'
    if (IS_WINDOWS === false) {
      core.setFailed('BundlerMinifierConsole.exe only works for Windows.')
      return
    }

    const BundlerMinifierPath = './bin/'
    core.debug(`BundlerMinifierPath == ${BundlerMinifierPath}`)

    // Add folder where BundlerMinifier lives to the PATH
    core.addPath(BundlerMinifierPath)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
