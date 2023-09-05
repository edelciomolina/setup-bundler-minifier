[![typescript-action status](https://github.com/actions/typescript-action/workflows/build-test/badge.svg)](https://github.com/actions/typescript-action/workflows/build-test/badge.svg)
releases/)
[![Release](https://img.shields.io/github/release/edelciomolina/setup-bundler-minifier.svg?label=Release)](https://github.com/edelciomolina/setup-bundler-minifier/releases)
[![Contributors](https://img.shields.io/github/contributors/edelciomolina/setup-bundler-minifier?label=Contributors)](https://github.com/edelciomolina/setup-bundler-minifier/graphs/contributors)

# Setup-BundlerMinifier

**Many thanks to Daren May for his [Setup-VSTest](https://github.com/darenm/Setup-VSTest) and to Warren Buckley for his [Setup-MSBuild](https://github.com/warrenbuckley/Setup-MSBuild) action which serves as the basis for this both action.**

This action sets up BundlerMinifierConsole.exe as a CLI tool for use in actions by:
- optionally downloading and caching a version of VSWhere.exe to help find the latest BundlerMinifierConsole.exe on the machine
- Adds the location of the BundlerMinifierConsole.exe to the PATH


# Usage

Basic:
```yaml
name: CI

on: [push]

jobs:
  build:

    runs-on: windows-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup MSBuild Path
      uses: edelciomolina/setup-bundler-minifier@v1

    - name: Setup BundlerMinifier Path
      uses: edelciomolina/setup-bundler-minifier@v1

    - name: Setup NuGet
      uses: NuGet/setup-nuget@v1.0.2

    - name: Restore packages
      run: msbuild .\dev\YourProject.csproj /t:Restore

    - name: MSBuild project
      run: msbuild .\dev\YourProject.csproj /t:Build /v:quiet /p:Configuration=Release /p:DeployOnBuild=True /p:WarningLevel=0 /p:DeployDefaultTarget=WebPublish /p:WebPublishMethod=FileSystem /p:DeleteExistingFiles=True /p:publishUrl=..\Output
      
    - name: BundlerMinifier Clean
      run: BundlerMinifierConsole.exe clean ".\dev\bundleconfig.json"
 
    - name: BundlerMinifier Update
      run: BundlerMinifierConsole.exe ".\dev\bundleconfig.json"

```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

