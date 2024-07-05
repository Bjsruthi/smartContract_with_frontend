const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_studentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_subject",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_grade",
          "type": "uint8"
        }
      ],
      "name": "addGrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_subject",
          "type": "string"
        }
      ],
      "name": "averageGrade",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_studentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_subject",
          "type": "string"
        }
      ],
      "name": "getGrade",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "grades",
      "outputs": [
        {
          "internalType": "string",
          "name": "studentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "subject",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "grade",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_studentName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_subject",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_newGrade",
          "type": "uint8"
        }
      ],
      "name": "updateGrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

document.getElementById('addGradeForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const studentName = document.getElementById('studentName').value;
  const subject = document.getElementById('subject').value;
  const grade = document.getElementById('grade').value;
  await contract.addGrade(studentName, subject, parseInt(grade));
});

document.getElementById('updateGradeForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const studentName = document.getElementById('updateStudentName').value;
  const subject = document.getElementById('updateSubject').value;
  const grade = document.getElementById('updateGrade').value;
  await contract.updateGrade(studentName, subject, parseInt(grade));
});

document.getElementById('getGradeForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const studentName = document.getElementById('getStudentName').value;
  const subject = document.getElementById('getSubject').value;
  const grade = await contract.getGrade(studentName, subject);
  document.getElementById('gradeResult').innerText = `Grade: ${grade}`;
});

document.getElementById('averageGradeForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const subject = document.getElementById('averageSubject').value;
  const average = await contract.averageGrade(subject);
  document.getElementById('averageResult').innerText = `Average Grade: ${average}`;
});
