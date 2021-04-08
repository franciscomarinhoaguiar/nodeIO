process.stdin.on('data', (data) => {
  process.stderr.write(`converting: "${data}" to base64 \n`);
  process.stdout.write(data.toString('base64') + '\n');
});
