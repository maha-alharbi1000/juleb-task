import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Icon used */
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { BackendApi } from "./api/backend-api";
import { MedicineDto } from "./dto/medicine-dto";

setupIonicReact();

const App: React.FC = () => {
  const [medicines, setMedicines] = useState<MedicineDto[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const resp = await BackendApi.getAll();

      setMedicines(resp);
    }
    fetchAll();
  }, []);
  return (
    <IonApp>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Over-the-Counter Medication</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        {medicines.map((medicine) => {
          return (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{medicine.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {medicine.description}
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonApp>
  );
};

export default App;
