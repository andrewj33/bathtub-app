import { Water } from "./Water"

export const Bathtub = ({waterLevel}) => {

    return (
        <div className="bathtub">
            <Water waterLevel={waterLevel} />
        </div>
    )
}
