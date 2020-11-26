import React, { useState, useEffect } from 'react';


const ImageLoader = (value) => new Promise((resolve) => {
	if (value instanceof File) {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.readAsDataURL(value);
	} else {
		resolve(value);
	}
});

export default function Upload({ setPreview, onChange, title, name, icon }) {
    const [image, setImage] = useState();
    useEffect(() => {
		ImageLoader(image).then((data) => {
			setPreview(data);
		});
	}, [image]);
    const onChangeHandler = (e) => {
		const file = e.target.files[0];
        setImage(file);
        onChange(file);
	};
    return (
        <div href="/" className="btn-load btn-light">
            <input
                type="file"
                id={`id-${name}`}
                accept="image/*"
                name={name}
                onChange={onChangeHandler}
            />
            {title && <label htmlFor={`id-${name}`}>
                <img src={icon} alt=""/>
                <span>{title}</span>
            </label>}
        </div>
    );
}