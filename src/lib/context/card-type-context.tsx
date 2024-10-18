import RegisterLibraryServices from "@/services/register-library-services";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface CardTypeContextProps {
  cardType: any[]; // Adjust type based on the API response
  setCardType: React.Dispatch<React.SetStateAction<any[]>>;
}

const CardTypeContext = createContext<CardTypeContextProps | undefined>(
  undefined
);

export const CardTypeProvider = ({ children }: { children: ReactNode }) => {
  const [cardType, setCardType] = useState<any[]>([]);

  useEffect(() => {
    RegisterLibraryServices.GetCardType().then((res) => {
      console.log("data", res);
      setCardType(res);
    });
  }, []);

  return (
    <CardTypeContext.Provider value={{ cardType, setCardType }}>
      {children}
    </CardTypeContext.Provider>
  );
};

export const useCardType = () => {
  const context = useContext(CardTypeContext);
  if (!context) {
    throw new Error("useCardType must be used within a CardTypeProvider");
  }
  return context;
};
