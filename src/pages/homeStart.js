import { useEffect } from "react";

import EventHomebox from "../components/homeEvent/homeEvent";

import left from "./../jpg/Group 3.svg";
import reght from "./../jpg/Group 4.svg";
import img1 from "./../jpg/Iqve7ZyrKeU.jpg";
import img2 from "./../jpg/eEnx4YUgLhI.jpg";
import img3 from "./../jpg/_386_pb4bp4.jpg";
import grupp from "./../jpg/Group 20.svg";
import ellepse from "./../jpg/Ellipse 3.svg";


function Home_start (){
    let count = 0 
    const on = "home_left_img"
    const off = "home_left_img display_none"
    const home_left_img_1 = "home_left_img"
    const home_left_img_2 = "home_left_img display_none"
    const home_left_img_3 = "home_left_img display_none"  

    return(
        <>                      
            <div className="home_back">
                    <div className="home_backgraund"></div>
                        <div className="home">
                            <div className="home_left">
                                <div></div>
                                <div><h1 className="home_left_t2">Воспитательная работа</h1></div>
                                <div><p className="home_left_t3">На этом сайте вы сможите ознакомиться с воспитательой работой на факультете ИАСТ.</p></div>
                                <div className="home_left_div">
                                    <div className="home_click_left"> 
                                        <button id="home_click_left" className="home_bottom_cl" ><img src={left} alt="left"/></button>          
                                    </div>
                                    <div className="home_click_right"> 
                                        <button id="home_click_right" className="home_bottom_cl" ><img src={reght} alt="reght"/></button>
                                    </div>
                                    <img id="home_left_img_1" className={home_left_img_1} src={img1} alt="home"/>
                                    <img id="home_left_img_2" className={home_left_img_2} src={img2} alt="home"/>
                                    <img id="home_left_img_3" className={home_left_img_3} src={img3} alt="home"/>
                                </div>
                                <div className="home_left_div_panl">
                                    <div id="home_left_div_panl_1" className="home_left_div_panl_box home_left_div_panl_box_akt"></div>
                                    <div id="home_left_div_panl_2" className="home_left_div_panl_box"></div>
                                    <div id="home_left_div_panl_3" className="home_left_div_panl_box"></div>
                                </div>
                            </div>
                            <div className="home_right">
                                <div className="home_right_text"><h3>Ближайшие мероприятия:</h3></div>
                                <div className="">
                                    <EventHomebox/>
                                    <EventHomebox/>
                                    <EventHomebox/>
                                </div>
                            </div>

                    </div>
                    <div className="bottom_mob">
                        <div className="home_bottom">
                            <div className="home_bottom_oval">
                                <img src={grupp} alt="grupp"/>
                                <div>
                                <p className="home_bottom_oval_p">100+ Студентов</p> 
                                <p className="home_bottom_oval_p">Учавствуют</p>
                                </div>
                            </div>
                            <div className="home_bottom_oval">
                                <img src={ellepse} alt="ellepse"/>
                                <div>
                                <p className="home_bottom_oval_p">5+</p> 
                                <p className="home_bottom_oval_p">Студенческих объеденений!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
        </>
    );
}
export default Home_start;