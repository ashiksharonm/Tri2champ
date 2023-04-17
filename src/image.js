import React from "react";
import bcycle from "./bcycle.jpg";
import "./image.css";

function Image() {
  return (
    <>
      <div className=" border border-2 border-zinc-900">
        <p
          className="txt"
          id="image"
          style={{ marginTop: "3%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ullam a
          numquam, fuga, hic nesciunt ipsum temporibus deserunt soluta qui
          perferendis ad aperiam iure nam quasi dolor illum nemo! Sit, illum
          quasi qui atque explicabo quo amet quod sint nam magnam, magni veniam
          cum corporis aliquam assumenda aliquid laboriosam id? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Vel ullam a numquam,
          fuga, hic nesciunt ipsum temporibus deserunt soluta qui perferendis ad
          aperiam iure nam quasi dolor illum nemo! Sit, illum quasi qui atque
          explicabo quo amet quod sint nam magnam, magni veniam cum corporis
          aliquam assumenda aliquid laboriosam id?
        </p>
        <div
          className="pic"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={bcycle}
            alt="Cycle"
            style={{ maxHeight: "10%", maxWidth: "70%" }}
          />
          <p
            className="txt"
            style={{ marginBottom: "7%" }}
          >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          reiciendis iusto repellat nemo rerum hic fuga quia laudantium facere
          cupiditate, praesentium reprehenderit vel saepe voluptates minus! Illo
          animi voluptates a repellendus perspiciatis nostrum, corporis,
          voluptatibus ducimus quibusdam saepe cupiditate repudiandae ipsam
          distinctio eius, quia mollitia ea? Rem corrupti provident ullam a eius
          incidunt, quia commodi, in, ut iste quisquam soluta recusandae.
          Assumenda tempore error nulla voluptatum tempora, dolorum doloribus
          earum id consequuntur asperiores alias neque ea libero minima
          possimus! Earum soluta labore culpa dolorem consequatur, molestiae
          harum, sed maxime sint unde dignissimos non, facere commodi ipsam vero
          doloremque? Cumque distinctio reiciendis possimus cum rem vero unde
          placeat eius aut nobis quas facere minus culpa eum velit accusamus
          exercitationem ducimus deleniti excepturi, eveniet, ad non libero
          sequi? Impedit, assumenda perferendis. Iste pariatur illum mollitia
          atque quis consequatur voluptatibus voluptas dignissimos nam.
          Accusamus dolorem non atque magnam quibusdam perspiciatis, earum
          dolore reprehenderit. Minima, aut nemo nobis fugit, sed sapiente natus
          culpa officia suscipit enim qui, magni quisquam non delectus dolore
          accusantium animi quod rerum excepturi! Dolor ipsa error totam modi,
          odio numquam minima eos, reiciendis magni dolorem expedita cum
          cupiditate aperiam ducimus sapiente obcaecati ad aspernatur, officia
          perferendis laboriosam fuga eligendi! Eveniet veniam autem atque sequi
          omnis necessitatibus quidem nisi odio voluptas vitae, facere
          voluptatum provident. Necessitatibus aperiam ullam, earum neque soluta
          nam illo laboriosam omnis recusandae, incidunt doloremque vel
          inventore aliquam natus explicabo iusto nostrum porro fuga consequatur
          quasi? Id reiciendis ea corrupti quas, quo mollitia tempora? Aliquid
          totam iusto tempore soluta sint neque voluptatibus molestiae quae.
          Ducimus hic dolorem modi cum. Ratione voluptatum eaque sapiente, harum
          iste ducimus error? Quo esse veritatis accusamus officiis quibusdam
          sit, aspernatur, laudantium vel obcaecati quia dolorum possimus?
          Provident odio officia vitae eius fugit? Minus, incidunt id. A
          obcaecati autem nostrum natus rem, quis reiciendis.
        </p>
      </div>
      </div>
    </>
  );
}

export default Image;
