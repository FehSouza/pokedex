import { useNavigate } from 'react-router-dom'
import { PokemonItemProps, Type2 } from '../../@types'
import { ReactComponent as PatternIconBig } from '../../assets/icons/10x5.svg'
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
import { Pokeball } from '../Pokeball'

export const icons = {
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
  pageInfo?: boolean
}

export const PokemonCard = ({ item, pageInfo }: PokemonCardProps) => {
  const navigate = useNavigate()
  const handleNavigate = (id: number) => navigate(`/about/${id}`)

  return (
    <S.PokemonCard
      key={item.id}
      onClick={() => handleNavigate(item.id)}
      color={`background-type-${item.types[0].type.name}`}
      pageInfo={pageInfo}
      layoutId={`bg-${item.id}`}
    >
      <S.InfoWrapper pageInfo={pageInfo}>
        <S.Id layoutId={`id-${item.id}`} pageInfo={pageInfo}>{`#${String(item.id).padStart(3, '0')}`}</S.Id>
        <S.Name layoutId={`name-${item.id}`} pageInfo={pageInfo}>
          {item.name}
        </S.Name>

        <S.TypesWrapper>
          {item.types.map((elem) => {
            const Icon = icons[elem.type.name]

            return (
              <S.Type layoutId={`type-${item.id}-${elem.type.name}`} key={elem.type.name} color={`type-${elem.type.name}`}>
                <Icon />
                <S.TypeName>{elem.type.name}</S.TypeName>
              </S.Type>
            )
          })}
        </S.TypesWrapper>
      </S.InfoWrapper>

      <S.ImageWrapper pageInfo={pageInfo}>
        <S.Image src={item.sprites.other['official-artwork'].front_default} alt="" layoutId={`pokemon-${item.id}`} />
      </S.ImageWrapper>

      <S.ShadowWrapper pageInfo={pageInfo}>
        <S.Shadow color={`background-type-${item.types[0].type.name}`} pageInfo={pageInfo} />
        {pageInfo ? <PatternIconBig /> : <PatternIcon />}
      </S.ShadowWrapper>

      {!pageInfo && (
        <S.LogoWrapper>
          <Pokeball layoutId={`pokeball-${item.id}`} />
        </S.LogoWrapper>
      )}
    </S.PokemonCard>
  )
}
