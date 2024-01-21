import { FormEvent, useState } from "react";
import Button from "../Components/Button/Button";
import Modal from "../Components/UI/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmin = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-constant-condition
    if (true) {
      handleModalClose();
    }
  };

  return (
    <div className="relative h-screen">
      <Button
        onClick={() => setModal((prev) => !prev)}
        variant="ghost"
        className="mt-8  "
      >
        Oper Modal
      </Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <Modal.Header>
          <h1 className="text-[20px] font-semibold">header </h1>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>

        <form onSubmit={handleSubmin}>
          <input
            className="border border-gray-300 block"
            type="text"
            name="name"
            id="name"
          />
          <input
            className="border border-gray-300 block"
            type="text"
            name="email"
            id="email"
          />
          <button className="border border-gray-300 block" type="submit">
            {"button"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
