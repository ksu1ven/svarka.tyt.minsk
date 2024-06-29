import { useState, useRef, useEffect } from 'react';
import {
    UseFormRegister,
    FieldError,
    UseFormTrigger,
    UseFormSetValue,
} from 'react-hook-form';

interface InputFileProps {
    register: UseFormRegister<{
        description?: string | undefined;
        image?: FileList | undefined;
        name: string;
        phone: string;
    }>;
    error?: FieldError;
    trigger: UseFormTrigger<{
        description?: string | undefined;
        image?: FileList | undefined;
        name: string;
        phone: string;
    }>;
    setValue: UseFormSetValue<{
        description?: string | undefined;
        image?: FileList | undefined;
        name: string;
        phone: string;
    }>;
}

export function InputFile({
    register,
    error,
    trigger,
    setValue,
}: InputFileProps) {
    const [files, setFiles] = useState<File[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddFiles = (newFiles: FileList | null) => {
        if (newFiles) {
            const newFilesArr = [];

            for (const file of newFiles) {
                if (!files.map((el) => el.name).includes(file.name))
                    newFilesArr.push(file);
            }

            setFiles(files.concat(newFilesArr));
        }
    };

    const handleRemoveFile = (fileToRemove: File) => {
        const newFilesArr = files.filter((file) => file !== fileToRemove);
        setFiles(newFilesArr);
    };

    useEffect(() => {
        const dt = new DataTransfer();
        files.forEach((file) => {
            dt.items.add(file);
        });
        if (inputRef.current) inputRef.current.files = dt.files;
        setValue('image', dt.files);

        trigger('image');
    }, [files, setValue, trigger]);

    return (
        <div className="input-file-row">
            <div className="input-file__choose">
                <label className="input-file" htmlFor="image">
                    <input
                        type="file"
                        id="image"
                        multiple
                        {...register('image')}
                        ref={inputRef}
                        onChange={(e) => handleAddFiles(e.target.files)}
                    />
                    <span>Выберите файл</span>
                </label>
                <p className="form__error form__error_file">
                    {error ? error.message : ''}
                </p>
            </div>

            <div className="input-file__list">
                {files.map((file) => (
                    <div key={file.name} className="file">
                        <p className="file__name">{file.name}</p>
                        <button
                            type="button"
                            onClick={() => handleRemoveFile(file)}
                            className="file__btn_remove"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

InputFile.defaultProps = {
    error: '',
};
