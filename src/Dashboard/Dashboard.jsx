import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../Styles/Dashboard.module.scss";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [seconds, setSeconds] = useState(3);
  const [passCode, setPassCode] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [timer, setTimer] = useState(false);
  const [passmessage, setPassMessage] = useState("");
  const [status, setStatus] = useState("");

  const handlePassCodeSubmission = (student) => {
    console.log(passCode, selectedStudent);
    if (passCode == "") {
      setStatus("warning");
      setAlert(true);
      setPassMessage("Please Fill The Required Field!");
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
    else if (passCode === "quiz1" && selectedStudent == "Student A") {
      setStatus("success");
      setAlert(true);
      setPassMessage("Accepted PassCode!");
      setTimeout(() => {
        setAlert(false);
        navigate("/student-a");
      }, 3000);

      setTimer(true)
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timerInterval);
      }, 3000);
      return () => clearInterval(timerInterval);
      
    } else {
      setStatus("error");
      setAlert(true);
      setPassMessage("Wrong / Invalid PassCode!");
      setTimeout(() => {
        setAlert(false);
      }, 3000);

    }
    if (passCode === "quiz2" && selectedStudent == "Student B") {
      setStatus("success");
      setAlert(true);
      setPassMessage("Accepted PassCode!");
      setTimeout(() => {
        setAlert(false);
        navigate("/student-b");
      }, 3000);
      setTimer(true)
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timerInterval);
      }, 3000);
      return () => clearInterval(timerInterval);
    }
    if (passCode === "quiz3" && selectedStudent == "Student C") {
      setStatus("success");
      setAlert(true);
      setPassMessage("Accepted PassCode!");
      setTimeout(() => {
        setAlert(false);
        navigate("/student-c");
      }, 3000);
      setTimer(true)
      const timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timerInterval);
      }, 3000);
      return () => clearInterval(timerInterval);
    }
    setPassCode("");
  };

  const handleReset = () => {
    setPassCode("");
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    onOpen();
  };

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.student}>
          <button
            className={styles.student_button}
            onClick={() => openModal("Student A")}
          >
            Student A
          </button>
          <button
            className={styles.student_button}
            onClick={() => openModal("Student B")}
          >
            Student B
          </button>
          <button
            className={styles.student_button}
            onClick={() => openModal("Student C")}
          >
            Student C
          </button>
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedStudent}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {alert && (
              <Box>
                 {timer && <p>{`Timer: ${seconds} seconds`}</p>}
                <Alert status={status} borderRadius={"5px"}>
                  <AlertIcon />
                  <AlertTitle>{passmessage}</AlertTitle>
                </Alert>
              </Box>
            )}
            <FormControl>
              <FormLabel mt="10px">Pass-Code</FormLabel>
              <Input
                color="teal"
                ref={initialRef}
                placeholder="Enter Passcode here..."
                _placeholder={{ color: "inherit" }}
                value={passCode}
                onChange={(obj) => setPassCode(obj.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleReset}>
              Reset
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={handlePassCodeSubmission}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Dashboard;
