import React, { useState } from "react";
import largeImage from "../images/JobGPT_home.png";
import smallImage1 from "../images/finger_paint.png";
import smallImage2 from "../images/natural_query.png";
import smallImage3 from "../images/sms.png";

export function Preview() {
    const [mainImage, setMainImage] = useState(largeImage);
    const [thumbnails, setThumbnails] = useState([
        smallImage1,
        smallImage2,
        smallImage3,
    ]);

    const handleImageSwap = (index) => {
        const newThumbnails = [...thumbnails];
        const clickedImage = newThumbnails[index];

        newThumbnails[index] = mainImage;
        setMainImage(clickedImage);
        setThumbnails(newThumbnails);
    };

    return (
        <div className="preview-container">
            <img src={mainImage} alt="Main Preview" className="preview-large" />

            <div className="preview-small">
                {thumbnails.map((img, index) => (
                    <div className="image-wrapper" key={index}>
                        <img
                            src={img}
                            alt={`Preview ${index}`}
                            className="preview-small-image"
                            onClick={() => handleImageSwap(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
