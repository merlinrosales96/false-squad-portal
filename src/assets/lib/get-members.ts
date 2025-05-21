import { Members } from "../../utils/MembersList"

const members = Members

export function getMemberById(memberId: string) {
  return members.find((b) => b.id === memberId) ?? members[0]
}
