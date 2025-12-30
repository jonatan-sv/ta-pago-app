import { MsIcon } from "material-symbols-react-native";

/**
 * Cria um item de rota para o BottomNavigation.
 *
 * @param {string} key - Identificador único da rota.
 * @param {string} title - Título da rota.
 * @param {MsIconDefinition} focusedIcon - Ícone quando a rota estiver selecionada.
 * @param {MsIconDefinition} unfocusedIcon - Ícone quando a rota não estiver selecionada.
 * @returns {{ key: string, title: string, focusedIcon: function(): JSX.Element, unfocusedIcon: function(): JSX.Element }}
 *
 */
export default function RouteItem(key, title, focusedIcon, unfocusedIcon) {
  const FocusedIcon = () => (
    <MsIcon icon={focusedIcon} color="white" size={26} />
  );

  const UnfocusedIcon = () => (
    <MsIcon icon={unfocusedIcon} color="white" size={26} />
  );

  return {
    key,
    title,
    focusedIcon: FocusedIcon,
    unfocusedIcon: UnfocusedIcon,
  };
}
