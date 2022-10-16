import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum
          veniam quod rem vel, sapiente voluptate perspiciatis exercitationem
          atque reprehenderit. Repellendus, animi. Quo at aliquid est pariatur
          quia harum cumque?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          ratione suscipit, sed excepturi et iusto beatae eveniet totam
          praesentium fuga perspiciatis quisquam obcaecati ad tempora, eligendi
          consequatur veniam temporibus ipsum, officia sint eos itaque ducimus.
          Dolor dolore quasi nam aliquid. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Facilis sequi similique, molestiae
          repudiandae enim, consectetur atque blanditiis velit ullam, beatae
          debitis omnis laboriosam qui deleniti vitae quod dolores totam
          quisquam ad iure quae quo? Ipsa minus recusandae libero alias
          molestias? lorem Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Blanditiis Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Blanditiis ratione suscipit, sed excepturi et iusto beatae
          eveniet totam praesentium fuga perspiciatis quisquam obcaecati ad
          tempora, eligendi consequatur veniam temporibus ipsum, officia sint
          eos itaque ducimus. Dolor dolore quasi nam aliquid. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Facilis sequi similique,
          molestiae repudiandae enim, consectetur atque blanditiis velit ullam,
          beatae debitis omnis laboriosam qui deleniti vitae quod dolores totam
          quisquam ad iure quae quo? Ipsa minus recusandae libero alias
          molestias? lorem ratione suscipit, sed excepturi et iusto beatae
          eveniet totam praesentium fuga perspiciatis quisquam obcaecati ad
          tempora, eligendi consequatur veniam temporibus ipsum, officia sint
          eos itaque ducimus. Dolor dolore quasi nam aliquid. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Facilis sequi similique,
          molestiae repudiandae enim, consectetur atque blanditiis velit ullam,
          beatae debitis omnis laboriosam qui deleniti vitae quod dolores totam
          quisquam ad iure quae quo? Ipsa minus recusandae libero alias
          molestias? lorem
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
