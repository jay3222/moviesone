import React from 'react';



const About=()=>{
    return(

        <>
        {/* <label for="exampleColorInput" class="form-label">Color picker</label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" /> */}
        <section style={{backgroundColor:'#038387'}}>
        <div className="container about-page ">
            <div className="row">
                <div className="col-12 mt-5 mb-4 ">
                    <h3 className=" mb-2  text-light-">About MoviesOne</h3>
                    <hr className="hrtag mt-0 text-light bg-light"/>
                        <div className="col-10" style={{backgroundColor:'#af0606',color:"white"}}>
                                <p className="my-2 mx-2 py-2 px-2 about-para">About MoviesOne!
                                We love movies! MoviesOne was created for people like us who want to watch "Great Movies. Free." MoviesOne has full-length movies that will make you laugh, make you cry, scare the heck out of you, or inspire you to hug the person you love. We have compelling documentaries, foreign films, unique original web series, and a place that showcases the brightest film makers of tomorrow. We built MoviesOne to be the most user friendly movie destination on the web. No movie is more than two clicks away and they are all FREE.
                                <br/><br/>
                                We at MoviesOne want to thank our "parent" Screen Media Ventures, LLC for giving us a home and an endless flow of great films. Screen Media Ventures, LLC, founded in 1999, is the largest independent distributor of motion pictures to the world wide television market. The company is one of the leading motion picture distributors of theatrical, home video, digital and television both in the U.S. and internationally. With over 1500 movies, Screen Media has one of the largest independently owned film libraries in the motion picture industry.
                                <br/><br/>
                                To keep up with all of the exciting things happening at MoviesOne, follow us on Facebook, Twitter, or on the MoviesOne blog.</p>
                                </div>
                </div>
            </div>
        </div>


        </section>    </>
    );
};
export default About;