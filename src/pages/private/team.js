import React from 'react'

import { getInvoices } from "../../data";

function Team() {
  let invoices = getInvoices();
console.log("as")
    return (
        <div>
              {invoices
          .map(invoice => (           
              <div>{console.log(invoice.name)}
              {invoice.name}
              </div>
          ))} 
          ingreso
        </div>
    )
}

export default Team
