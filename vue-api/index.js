const {prisma} = require('./generated/prisma-client')

main = async () =>{
  await prisma.createUser({
    nome: 'viniciu',
    email: 'taguerrancompany@gmail.com',
    password: '13313211321'
  })
}

main().catch(e => console.error(e))