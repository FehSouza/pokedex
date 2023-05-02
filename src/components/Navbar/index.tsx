import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'
import { ReactComponent as GenerationIcon } from '../../assets/icons/generation.svg'
import { ReactComponent as SortIcon } from '../../assets/icons/sort.svg'

import * as S from './styles'

export const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarButton aria-label="generation-button">
        <GenerationIcon />
      </S.NavbarButton>

      <S.NavbarButton aria-label="sort-button">
        <SortIcon />
      </S.NavbarButton>

      <S.NavbarButton aria-label="filter-button">
        <FilterIcon />
      </S.NavbarButton>
    </S.Navbar>
  )
}
