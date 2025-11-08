import { Link } from "react-router-dom";
import HomePage from "./home/HomePage";
const HomePage = () => {
    return (
        <div>
            <nav>
                <div>
                    <img src="kllogo.jpeg" alt="kllogo" />
                    <h1>Product Management System</h1>
                </div>
                <div>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/aboutus">AboutUs</Link>
                </div>
            </nav>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Quia obcaecati minima
                      neque veniam ducimus voluptas dolorem
                       saepe ab cupiditate, sequi qui, molestiae,
                        dicta fugiat animi beatae? Hic, adipisci.
                         Dignissimos nesciunt, debitis ducimus nostrum
                          illum ab cumque eligendi sunt sint quisquam
                           dolorem provident officiis laudantium fugiat
                            quos voluptates odio, unde aliquid aspernatur
                             consequuntur rem quod. Eligendi ullam laudantium
                              beatae temporibus ut fuga molestiae in ipsam
                               Officiis obcaecati soluta quidem sed dolorem
                                neque, numquam necessitatibus veniam repellat
                                 doloremque itaque debitis in voluptatem unde
                                  atque aliquid ratione. Quis, suscipit? Distinctio
                                   aut dolorum nesciunt debitis, eaque molestias
                                    in modi quo odit. Quo, culpa illum.</p>
            </div>
        </div>
    );
}

    export default HomePage;