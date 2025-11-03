import { toast } from "react-toastify";

const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem('installList');
    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData
    }else{
        return []
    }

}

const addToStoredDB =(id)=> {
    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){
        toast('this Id already exist');
    }else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem('installList',data)
    }

}

const removeFromStoredDB = (id) => {
  const storedAppData = getStoredApp();
  const updatedData = storedAppData.filter(item => String(item) !== String(id));
  if (updatedData.length !== storedAppData.length) {
    localStorage.setItem('installList', JSON.stringify(updatedData));
    toast('App successfully removed');
  } else {
    toast('This ID does not exist');
  }
};


export {addToStoredDB,getStoredApp,removeFromStoredDB};
