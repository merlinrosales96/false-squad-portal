import { MEMBERS } from "../const/members"

const members = MEMBERS

export function getMemberById(memberId: string) {
  return members.find((b) => b.id === memberId) ?? members[0]
}
