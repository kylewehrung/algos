const { spawn } = require("child_process");

const resumeText = "Damian Lillard has been traded to the Bucks.";

const pythonProcess = spawn("python", ["extract_names.py", resumeText]);

pythonProcess.stdout.on("data", (data) => {
  const [firstName, lastName] = data.toString().trim().split("\n");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
});

pythonProcess.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

pythonProcess.on("close", (code) => {
  if (code !== 0) {
    console.error(`Python process exited with code ${code}`);
  }
});



