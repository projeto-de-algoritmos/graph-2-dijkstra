const { exec } = require('child_process')

exec('./prog < in.txt', (err, stdout, stderr) => {
  console.log('oi')
  console.log(stdout)
})
