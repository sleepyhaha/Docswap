import { PaymentForm } from "react-square-web-payments-sdk";

export default function Payment() {
  return (
    <div>
      <PaymentForm
        applicationId="sandbox-sq0idb-ekhgTXBX9i666DmTmQ-kpA"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log("token:", token);
          console.log("verifiedBuyer:", verifiedBuyer);
        }}
        locationId="LTQRCJ9R7PYGW"
      ></PaymentForm>
    </div>
  );
}
