import { PokemonItemProps, Type2 } from '../../@types'
import { ReactComponent as PatternIcon } from '../../assets/icons/6x3.svg'
import { ReactComponent as Bug } from '../../assets/icons/bug.svg'
import { ReactComponent as Dark } from '../../assets/icons/dark.svg'
import { ReactComponent as Dragon } from '../../assets/icons/dragon.svg'
import { ReactComponent as Electric } from '../../assets/icons/electric.svg'
import { ReactComponent as Fairy } from '../../assets/icons/fairy.svg'
import { ReactComponent as Fighting } from '../../assets/icons/fighting.svg'
import { ReactComponent as Fire } from '../../assets/icons/fire.svg'
import { ReactComponent as Flying } from '../../assets/icons/flying.svg'
import { ReactComponent as Ghost } from '../../assets/icons/ghost.svg'
import { ReactComponent as Grass } from '../../assets/icons/grass.svg'
import { ReactComponent as Ground } from '../../assets/icons/ground.svg'
import { ReactComponent as Ice } from '../../assets/icons/ice.svg'
import { ReactComponent as Normal } from '../../assets/icons/normal.svg'
import { ReactComponent as Poison } from '../../assets/icons/poison.svg'
import { ReactComponent as LogoIcon } from '../../assets/icons/pokeball.svg'
import { ReactComponent as Psychic } from '../../assets/icons/psychic.svg'
import { ReactComponent as Rock } from '../../assets/icons/rock.svg'
import { ReactComponent as Steel } from '../../assets/icons/steel.svg'
import { ReactComponent as Water } from '../../assets/icons/water.svg'
import * as S from './styles'

const icons = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
} as Record<
  Type2['name'],
  React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
>

interface PokemonCardProps {
  item: PokemonItemProps
}

export const PokemonCard = ({ item }: PokemonCardProps) => {
  return (
    <S.PokemonCard key={item.id} color={`background-type-${item.types[0].type.name}`}>
      <S.InfoWrapper>
        <S.Id>{`#${String(item.id).padStart(3, '0')}`}</S.Id>
        <S.Name>{item.name}</S.Name>

        <S.TypesWrapper>
          {item.types.map((elem) => {
            const Icon = icons[elem.type.name]

            return (
              <S.Type key={elem.type.name} color={`type-${elem.type.name}`}>
                <Icon />
                <S.TypeName>{elem.type.name}</S.TypeName>
              </S.Type>
            )
          })}
        </S.TypesWrapper>
      </S.InfoWrapper>

      <S.DetailWrapper>
        <PatternIcon />
      </S.DetailWrapper>

      <S.ImageWrapper>
        <S.Image src={item.sprites.other['official-artwork'].front_default} alt="" />
      </S.ImageWrapper>

      <S.LogoWrapper>
        <LogoIcon />
      </S.LogoWrapper>
    </S.PokemonCard>
  )
}