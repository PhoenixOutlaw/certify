import React, { useEffect, useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import 'antd/dist/antd.css'
import {CloseOutlined, LeftOutlined } from "@ant-design/icons";
import "./css/selected.css";

export const Selected = ({ samples }) => {
  const { name } = useParams();
  const [d, setd] = useState();
  const iref = useRef();
  const history = useHistory();
  const [preview, setpreview] = useState(false);
  const [formd, setformd] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setformd(data);
    console.log(data)
    setpreview(true);
  };

  function dat() {
    var temp = samples.filter((s) => s?.name === name)[0];
    setd(temp);
  }

  useEffect(() => {
    dat();
    console.log(iref);
  });

  return (
    <div className="scnt">
      <span id="hc">
        <LeftOutlined style={{marginRight:"40px",marginLeft:"10px",cursor:"pointer"}} onClick={()=>history.push("/")}/>
        <h2># {d?.name}</h2> 
        <img src={d?.img} alt="" />
      </span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>TITLE</h5>
        <input type="text" {...register("title", { required: true })} />
        {errors.title && <span id="er">This field is required</span>}
        <h5 style={{marginTop:"50px"}}>DESCRIPTION</h5>
        <textarea {...register("desc", { required: true })}></textarea>
        {errors.desc && <span id="er">This field is required</span>}
        <button id="btn" type="submit">Preview</button>
      </form>

      {preview && (
        <div className="preview" onClick={() => setpreview(false)}>
          <div className="pcnt" ref={iref}>
            <img src={d?.img} alt="" />
            <div>
              <div className="details">
                <h1>{formd.title}</h1>
                <h2>
                  {formd.desc}
                </h2>
              </div>
            </div>
          </div>
          <button style={{zIndex:"999",position:"relative",marginTop:"20px"}} id="btn" onClick={() => exportComponentAsPNG(iref)}>
            download
          </button>
          
        </div>
      )}
    </div>
  );
};
