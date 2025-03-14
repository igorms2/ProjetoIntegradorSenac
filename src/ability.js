import { AbilityBuilder, Ability } from '@casl/ability';

export function buildAbilityFor(role) {
  const { can, rules } = new AbilityBuilder(Ability);

  switch (role) {
    case 'morador':
      can('manage', 'DashboardMorador');
      can('read', 'GerarCartao');
      break;
    case 'funcionario':
      can('manage', 'DashboardFuncionario');
      can('manage', 'GerarCartao');
      break;
    case 'admin':
      can('manage', 'all'); // Permissão total
      break;
    default: // guest
      can('read', 'Home');
      break;
  }

  return new Ability(rules);
}