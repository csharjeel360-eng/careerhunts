const fs = require('fs');
const path = require('path');
const envPath = path.resolve(process.cwd(), '.env.local');
const content = fs.readFileSync(envPath, 'utf8');
for (const line of content.split(/\r?\n/)) {
  if (line.startsWith('USAJOBS_API_KEY=')) {
    console.log(line);
  }
}
