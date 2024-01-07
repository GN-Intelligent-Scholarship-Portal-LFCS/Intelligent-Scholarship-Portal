import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import ImageCarousel from "./CarouselComponent";
import { Announcement } from "./Header-Functions";
import Boxes from "./BoxComponent";
import PublicButtons from "./PublicButtons";
// import AnnouncementNotice from "./NoticeBoardComponent";

function Home() {
    return (
        <div>
            <Header />
            <Announcement />
            <ImageCarousel />
            {/* <Boxes /> */}
            <PublicButtons />
            <Footer />

            






            {/* Space for BoxComponent */}

            <section className="content-section">
                <div className="container-fluid">
                    <div className="row">
                    
                        {/* <div className="col-sm-4">
                        
                            <AnnouncementNotice />
                        </div>

                        <div className="col-sm-8">
                            Space for ScholarshipTableComponents
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;