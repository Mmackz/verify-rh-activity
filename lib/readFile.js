import fs from "fs";
import Papa from "papaparse";

export async function getAddresses() {
   const fileName = process.argv[2];
   return new Promise((resolve, reject) => {
      fs.readFile(fileName, "utf8", (err, data) => {
         if (err) {
            return reject(err);
         }

         Papa.parse(data, {
            complete: function (results) {
               const addresses = results.data.map((row) => row[0]).filter((address) => address);
               resolve(addresses);
            }
         });
      });
   });
}
