import * as React from 'react';
import { useState, useEffect } from 'react';

const ImageLoader = (value: File) => new Promise((resolve) => {
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

type UploadType = {
    setPreview: (d: string) => void,
    onChange: (v: File | null) => void,
    title: string,
    name: string,
    icon: string,
}

const Upload: React.FC<UploadType> = ({ setPreview, onChange, title, name, icon }) => {
    const [image, setImage] = useState<File | null>();
    useEffect(() => {
        if(image) {
            ImageLoader(image).then((data: any) => {
                setPreview(data);
            });
        }
	}, [image]);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
        setImage(file);
        onChange(file);
	};
    return (
        <div className="btn-load btn-light">
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

export default Upload;