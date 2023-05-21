import { useNavigate } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import { PokemonItemProps, Type2 } from '../../@types/PokemonItem'
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
import { ReactComponent as Psychic } from '../../assets/icons/psychic.svg'
import { ReactComponent as Rock } from '../../assets/icons/rock.svg'
import { ReactComponent as Steel } from '../../assets/icons/steel.svg'
import { ReactComponent as Water } from '../../assets/icons/water.svg'
import { getPokemon } from '../../services'
import { Pokeball } from '../Pokeball'
import * as S from './styles'

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

export interface PokemonCardProps {
  item: PokemonItemProps
}

export const PokemonCardHome = ({ item }: PokemonCardProps) => {
  const { cache } = useSWRConfig()
  const navigate = useNavigate()

  const handleNavigate = async (id: number) => {
    const data = await getPokemon(`/pokemon/${id}`)
    cache.set(`/pokemon/${id}`, { data })
    navigate(`/about/${id}`)
  }

  return (
    <S.PokemonCard key={item.id} onClick={() => handleNavigate(item.id)} color={`background-type-${item.types[0].type.name}`}>
      <S.InfoWrapper>
        <S.Id layoutId={`id-${item.id}`}>{`#${String(item.id).padStart(3, '0')}`}</S.Id>
        <S.Name layoutId={`name-${item.id}`}>{item.name}</S.Name>

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

      <S.ImageWrapper>
        <S.Image src={item.sprites.other['official-artwork'].front_default} alt="" layoutId={`img-${item.id}`} />
      </S.ImageWrapper>

      <S.ShadowWrapper layoutId={`icon-${item.id}`}>
        <S.Shadow color={`background-type-${item.types[0].type.name}`} />
        <PatternIcon />
      </S.ShadowWrapper>

      <S.LogoWrapper>
        <Pokeball layoutId={`pokeball-${item.id}`} />
      </S.LogoWrapper>
    </S.PokemonCard>
  )
}
