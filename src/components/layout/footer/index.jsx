import React from 'react'
import Container from '../../common/containerClass'

// React icons
import { MdFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo1 from './logo1';
import Logo2 from "../../layout/footer/logo2"


const Footer = () => {

    const navElements = [
        {id: 1, title: "About Us", href: "/about"},
        {id: 2, title: "Privacy", href: "/privacy"},
        {id: 3, title: "Terms", href: "/terms"},
      ]  


  return (
    <footer className='bg-[#1a1816] mt-36 py-16'>
    <Container>
        <div className=' flex flex-row justify-between '>

          
          <div className='flex flex-row gap-3'>
          <Link className='p-2 bg-white rounded-full'>
            <MdFacebook className='bg-white'/>
          </Link>
          <Link className='p-2 bg-white rounded-full'>
            <RiTwitterXLine className='bg-white'/>
          </Link>
          <Link className='p-2 bg-white rounded-full'>
            <FaLinkedinIn className='bg-white'/>
          </Link>
          <Link className='p-2 bg-white rounded-full'>
            <BsInstagram className='bg-white'/>
          </Link>
          <Link className='p-2 bg-white rounded-full'>
            <FaPinterest className='bg-white'/>
          </Link>

          <div className='p-2 bg-white rounded-full'>
            <FaYoutube className='bg-white'/>
          </div>

          </div>


          <div className='flex flex-row gap-2'>
                <Logo1/>
                <Logo2/>
            </div>
        </div>

        <div>
            <ul className="flex flex-row text-white mr-auto gap-5 items-center text-[18px] justify-start mt-6">
                {
                    navElements && navElements.map((elem) => (
                        <li elem={elem} key={elem.id} className='hover:underline'>
                            {elem.title}
                        </li>
                    ))
                }
            </ul>
        </div>

    </Container>

    </footer>
  )
}

export default Footer