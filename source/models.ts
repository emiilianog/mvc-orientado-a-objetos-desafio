import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json;
  }

  getAll() {
    return this.data;
  }

  addOne(Contact: Contact) {
    this.data.push(Contact);
  }

  //Save: debe escribir todo el objeto interno en el archivo contacts.json
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }

  getOneById(id) {
    const encontrado = this.data.find((c) => c.id === id);
    return encontrado;
  }
}

// const prueba = new ContactsCollection();
// prueba.load();
// console.log(prueba);

export { ContactsCollection };
