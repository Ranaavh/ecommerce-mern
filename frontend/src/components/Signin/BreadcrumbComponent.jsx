import { Breadcrumb } from "react-bootstrap";
const BreadcrumbComponent = () => (
  <Breadcrumb className="mb-4">
    <Breadcrumb.Item href="/" className="breadcrumb-link">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Signin</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbComponent;
