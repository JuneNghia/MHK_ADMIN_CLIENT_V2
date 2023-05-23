import { Modal, Button } from 'react-bootstrap'

interface CustomModalProps {
  size?: any
  show: boolean
  handleClose: any
  title?: string
  body: any
  disabled: boolean
  handleSubmit: any
  textSubmit: string
}

function CustomModal(props: CustomModalProps) {
  const { size, show, handleClose, handleSubmit, title, body, textSubmit, disabled } = props

  return (
    <Modal size={size} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title as='h5'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Thoát
        </Button>
        <Button disabled={disabled} variant='primary' onClick={handleSubmit}>
          {textSubmit}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
