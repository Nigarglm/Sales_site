import { Link } from "react-router-dom";
import logo from "../../../assets/header/images/logobrand.svg"
import Container from "../../common/containerClass";
import Logo from "./logo";

// React icons
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import FormData from "../../../pages/form-data/page";
import { useEffect, useState } from "react";
 

const Header = () => {

const navElements = [
  {id: 1, title: "For Sale", href: "/for-sale"},
  {id: 2, title: "Rent", href: "/rent"},
  {id: 3, title: "Daily rent", href: "/daily"},
]  

const [isModalOpen, setIsModalOpen] = useState(false);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Show the success message for 3 seconds
  };


   const userId = JSON.parse(localStorage.getItem("userId"))

   const [user, setUser] = useState()
   
   const fetchUserData = async() => {
   const response = await fetch(`http://localhost:3000/users/${userId}`)
   const data = await response.json()

   setUser(data)
   }
   
   useEffect(() => {
    fetchUserData()
   }, [])

    return (
      <header>
        <Container>
         <div className="flex flex-row justify-between items-center">

        <Link to="/"> 
        <Logo/>
        </Link>  

        <ul className="flex flex-row text-black mr-auto gap-5 items-center text-[18px] justify-center mt-2">

          {
            navElements && navElements.map((elem) => (  
             <Link to={elem.href} key={elem.id}><li className="hover:underline">
                  {elem.title}
             </li>
             </Link>
            ))
          }
        </ul>
        
        <div className="flex gap-3 items-center">
       
        <button
              onClick={toggleModal} // Call handler function
              className={`py-2 px-4 text-white rounded-md ${
                !userId ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-opacity-50"
              }`}
              disabled={!userId} // Disable the button if no userId
            >
              Add new announcement
            </button>
        

        <Link to="/sign-in">
        <button className="hover:underline">
          Log in
        </button>
        </Link>
        
        <Link to="/sign-in">
        <button 
        onClick={() => {
          localStorage.clear("userId")
        }}>
          <MdLogout className="hover:text-blue-600"/>
        </button>
        </Link>
        
        <Link to="/sign-up">
        <button className="text-white bg-black px-4 py-2 rounded-3xl font-bold hover:opacity-40">
          Sign up
        </button>
        </Link>
        
        <Link to="/specifics">
        <div className="ml-0 shrink-0">
       { userId ?
         <img
         src={user?.image} // Display the user image
         alt="User"
         className="w-10 h-10 rounded-full"
         /> : <CgProfile className="text-4xl" />
        }
        </div>
        </Link>

        </div>

        </div>
      
        {showSuccessMessage && (
          <div className="bg-green-500 text-white p-4 rounded-lg fixed top-5 right-5">
            You successfully posted your announcement!
          </div>
        )}
      {isModalOpen && <FormData isModalOpen={isModalOpen} onClose={toggleModal} 
      onSuccess={handleSuccess} />}

      </Container>
      </header>
    
    );
  };

  export default Header