import React, { useState, useEffect } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  decreaseAuthStep,
  increaseAuthStep,
} from "@/store/slices/authStep/AuthStepSlice";
import { Editor } from "@tinymce/tinymce-react";
import PrimaryButton from "@/components/shared/buttons/Primary";
import SecondaryButton from "@/components/shared/buttons/Secondary";

interface FormInputs {
  code: number;
}

const Step2: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm<FormInputs>({
  //   resolver: yupResolver(Step2Schema),
  // });

  function showTiny() {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a certain delay
    }, 1000); // Adjust the delay as needed
  }

  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const editor = document.querySelector(".tox-tinymce");
      if (editor) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && (
        <div className="rounded-lg md:mb-[20vh] ">
          <div className="w-full h-[50vh] flex justify-center items-center">
            <ButtonLoader color="#000" />
          </div>
        </div>
      )}
      <div className="mt-8">
        <Editor
          apiKey="i9v9y510jkigwy236v92swqv0j5q8l5gfqgjeqstb73hp8kd"
          onInit={showTiny}
          onEditorChange={handleEditorChange}
          init={{
            plugins:
              "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            menubar: "file edit view insert tools",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",

            height: 600,
            branding: false,
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request: any, respondWith: any) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
            resize: "both",
            font_formats:
              "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino;  Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Raleway=raleway; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva;",

            content_css: "./mycontent.css",
            content_style:
              "@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); body { font-family: 'Raleway'; }",
          }}
          initialValue="Welcome to TinyMCE!"
        />
      </div>
      <div className="flex items-center space-x-4 mt-16">
        <div className="sm:w-[250px]">
          <SecondaryButton
            text="Back"
            type="button"
            action={() => dispatch(decreaseAuthStep())}
          />
        </div>
        <div className="sm:w-[250px]">
          <PrimaryButton
            text="Next"
            type="button"
            loading={false}
            action={() => dispatch(increaseAuthStep())}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
