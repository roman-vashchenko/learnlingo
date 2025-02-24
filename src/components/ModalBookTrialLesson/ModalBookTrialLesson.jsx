import { useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "64px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    bordeaRadius: "30px",
    backgroundColor: "#FFF",
  },
};

const ModalBookTrialLesson = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          libero, cum voluptatibus, vitae id quod exercitationem quo debitis
          tempora inventore illum odio aspernatur sapiente fuga optio.
          Repellendus hic quibusdam dolorum accusamus, vero dolore deleniti
          excepturi mollitia explicabo omnis sapiente dolorem expedita ea
          temporibus, debitis asperiores eius ratione molestiae eligendi alias
          repellat officia nemo. Natus, temporibus? Saepe temporibus, quo magnam
          fugiat eius porro sapiente incidunt, dolor consectetur eligendi iure
          ducimus, quia doloremque illo minima possimus reiciendis. In
          voluptatibus animi quisquam consectetur debitis est perspiciatis
          dignissimos dolorum tempore, autem iusto? Natus beatae inventore
          voluptatum sit ea commodi cum, voluptate magni reiciendis, aut itaque,
          nihil nostrum. Illum molestias hic unde asperiores. Alias possimus
          sint, atque nulla neque aperiam culpa. Error debitis saepe itaque
          minima consequuntur sit enim! Rem illum commodi amet! Asperiores
          perferendis dolorum inventore unde, natus reiciendis commodi saepe
          omnis? Sunt id magnam quasi ullam dolorum non nemo, alias voluptatibus
          rerum soluta in. Minima laudantium consequuntur voluptas distinctio
          illum ex officia accusantium quasi quia, nostrum optio reiciendis
          accusamus necessitatibus numquam perferendis nobis rem consectetur
          debitis cumque sed asperiores obcaecati odio officiis! Velit saepe
          consequuntur pariatur totam laborum dolores doloremque debitis magni
          id minima eos quas quasi qui eveniet dolorum aut possimus ratione
          placeat nobis, hic dignissimos nostrum eaque? Nisi dolor suscipit ut?
          Fuga veniam, praesentium rerum voluptates amet voluptas vitae
          mollitia, sunt id qui voluptatum? Quasi nesciunt assumenda quaerat
          harum. Nesciunt quos similique natus fuga fugit facere est
          perspiciatis deserunt dicta odit tenetur reiciendis, itaque illo ipsa
          quam aliquid ea minus? Tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis libero, cum voluptatibus, vitae id quod
          exercitationem quo debitis tempora inventore illum odio aspernatur
          sapiente fuga optio. Repellendus hic quibusdam dolorum accusamus, vero
          dolore deleniti excepturi mollitia explicabo omnis sapiente dolorem
          expedita ea temporibus, debitis asperiores eius ratione molestiae
          eligendi alias repellat officia nemo. Natus, temporibus? Saepe
          temporibus, quo magnam fugiat eius porro sapiente incidunt, dolor
          consectetur eligendi iure ducimus, quia doloremque illo minima
          mollitia, sunt id qui voluptatum? Quasi nesciunt assumenda quaerat
          harum. Nesciunt quos similique natus fuga fugit facere est
          perspiciatis deserunt dicta odit tenetur reiciendis, itaque illo ipsa
          quam aliquid ea minus? Tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis libero, cum voluptatibus, vitae id quod
          exercitationem quo debitis tempora inventore illum odio aspernatur
          sapiente fuga optio. Repellendus hic quibusdam dolorum accusamus, vero
          dolore deleniti excepturi mollitia explicabo omnis sapiente dolorem
          expedita ea temporibus, debitis asperiores eius ratione molestiae
          eligendi alias repellat officia nemo. Natus, temporibus? Saepe
          temporibus, quo magnam fugiat eius porro sapiente incidunt, dolor
          consectetur eligendi iure ducimus, quia doloremque illo minima
          mollitia, sunt id qui voluptatum? Quasi nesciunt assumenda quaerat
          harum. Nesciunt quos similique natus fuga fugit facere est
          perspiciatis deserunt dicta odit tenetur reiciendis, itaque illo ipsa
          quam aliquid ea minus? Tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis libero, cum voluptatibus, vitae id quod
          exercitationem quo debitis tempora inventore illum odio aspernatur
          sapiente fuga optio. Repellendus hic quibusdam dolorum accusamus, vero
          dolore deleniti excepturi mollitia explicabo omnis sapiente dolorem
          expedita ea temporibus, debitis asperiores eius ratione molestiae
          eligendi alias repellat officia nemo. Natus, temporibus? Saepe
          temporibus, quo magnam fugiat eius porro sapiente incidunt, dolor
          consectetur eligendi iure ducimus, quia doloremque illo minima
        </p>
      </ReactModal>
    </div>
  );
};

export default ModalBookTrialLesson;
