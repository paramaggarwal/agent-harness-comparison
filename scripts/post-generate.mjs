import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const rootRedirectTarget = './overview/cli-agent-internals-comparison'
const indexPath = join(process.cwd(), '.output/public/index.html')

const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${rootRedirectTarget}" />
    <meta name="robots" content="noindex" />
    <title>Redirecting...</title>
    <script>location.replace('${rootRedirectTarget}')</script>
  </head>
  <body>
    <p>Redirecting to <a href="${rootRedirectTarget}">${rootRedirectTarget}</a>...</p>
  </body>
</html>
`

writeFileSync(indexPath, redirectHtml)
console.log(`[post-generate] wrote ${indexPath} redirect -> ${rootRedirectTarget}`)
