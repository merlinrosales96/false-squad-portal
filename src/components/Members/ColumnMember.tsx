import MemberCard from './MemberCard'
import type { Member } from '../../type/members'

interface Props {
    member: Member
    className?: string
}

const ColumnMember = ({ member, className = '' }: Props) => {


    return (
        <div className={`relative flex flex-row gap-6 ${className}`}>
            <MemberCard
                id={member.id}
                name={member.name}
            />
        </div>
    )
}

export default ColumnMember
