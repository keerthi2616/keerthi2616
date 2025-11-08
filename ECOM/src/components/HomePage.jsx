import { Link } from "react-router-dom";
const HomePage=()=>{
  return(
    <div className="min-h-screen bg-blue-100">
          <nav nav className="flex justify-between items-center  bg-pink-300 p-4 text-red">
            <div className="flex items-center">
            <img src="src/components/klu.jpg" alt="kllogo" className="w-20 mr-10"/>
            </div>
            <div>
            <h1 className="text-2xl font-bold text-black-700 flex-1 text-centre">Product Management System</h1>
            </div>
            <div className="flex gap-4  ">
              < Link to="/signin" className="hover:underline">SignIn</Link>
                < Link to="/signup">SignUp</Link>
                <Link to="/aboutus">AboutUs</Link>
            </div>
          </nav>
         <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eligendi veniam dolores quam doloremque odit debitis perspiciatis, sint excepturi incidunt corporis corrupti, illo ex quas dolorum architecto totam saepe fuga vero ipsa maiores beatae accusantium. Officia voluptates incidunt rerum eveniet molestiae. Officia inventore accusamus consequuntur explicabo sequi sunt porro, in laboriosam molestias neque delectus, nostrum exercitationem incidunt qui impedit nobis, repellat obcaecati ipsum. Distinctio harum vero blanditiis quis repudiandae ipsam incidunt corrupti ad vitae illo? Corporis obcaecati ex blanditiis sequi minima soluta, fugiat, repudiandae cum temporibus delectus, dolorum praesentium exercitationem eveniet nostrum dolor molestias nulla sapiente magni consequatur. Corporis, ex.</p>

         <nav>
          <footer className="bg-pink-300 text-center p-4 mt-10">
            <p>&copy; 2023 Product Management System. All rights reserved.</p>
          </footer>
         </nav>
    </div>
    
  )
}
export default HomePage;