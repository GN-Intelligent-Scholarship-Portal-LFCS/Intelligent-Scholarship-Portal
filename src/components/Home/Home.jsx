import React from "react";
import "./Home.css";
import ImageCarousel from "./CarouselComponent";
import AnnouncementNotice from "./NoticeBoardComponent";

function Home() {
    return (
        <div>
            <ImageCarousel />

            {/* Space for BoxComponent */}

            <section className="content-section pt-3 mb-2">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-4">
                            <AnnouncementNotice />
                        </div>

                        <div className="col-sm-8">
                            {/* Space for ScholarshipTableComponents */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;