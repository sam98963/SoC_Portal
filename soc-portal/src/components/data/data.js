import profileImageHung from "./Images/hung.png";
import profileImageHani from "./Images/hani.png";
import profileImageSam from "./Images/sam.png";
import profileImageAhia from "./Images/ahia.png";

export const loginData =  [  
  {
      firstName: "Hani",
      surname: "Abdi",
      username:"hania",
      email: "hani@gmail.com",
      password: "1234"
  },  
   {
      firstName: "Samuel",
      surname: "Willimason",
      username:"samw",
      email: "samw@gmail.com",
      password: "1234"
  },  
  {
      firstName: "Ahia",
      surname: "Jalil",
      username:"ahiaj",
      email: "ahiaj@gmail.com",
      password: "1234"
  },  
  {
      firstName: "Hung",
      surname: "Vo",
      username:"hungv",
      email: "hungv@gmail.com",
      password: "1234"
  },  
]  

const userData = [

    {
        firstName: "Hung",
        surname: "Vo",
        email: "hungv@gmail.com",
        appId: "123456",
        image: profileImageHung,
        toDoList: [ 
            { task: "make avatar", dueDate: "25/04/2023", completed: false},
            { task:" make game", dueDate: "30/04/2023", completed: false, }
        ]
    },
    {
        firstName: "Ahia",
        surname: "Jalil",
        email: "ahiajalil@gmail.com",
        appId: "147852",
        image: profileImageAhia,
        toDoList: [ 
            { task: "make avatar", dueDate: "25/04/2023", completed: true },
            { task:" make game", dueDate: "30/04/2023", completed: false, }
        ]
    },
    {
        firstName: "Samuel",
        surname: "Willimason",
        email: "samw@gmail.com",
        appId: "369852",
        image: profileImageSam,
        toDoList: [ 
            { task: "make avatar", dueDate: "25/04/2023", completed: true },
            { task:" make game", dueDate: "30/04/2023", completed: true, }
        ]
    },
    {
        firstName: "Hani",
        surname: "Abdi",
        email: "hani@gmail.com",
        appId: "456321",
        image: profileImageHani,
        toDoList: [ 
            { task: "make avatar", dueDate: "25/04/2023", completed: true },
            { task:" make game", dueDate: "30/04/2023", completed: true, }
        ]
    }
]

export default userData;