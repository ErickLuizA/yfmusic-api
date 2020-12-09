import bcrypt from 'bcrypt'
import { Hasher } from '../../data/criptography/hasher'
import { HashComparer } from '../../data/criptography/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number = 10) {}

  async hash (plaintext: string): Promise<string> {
    const digest = await bcrypt.hash(plaintext, this.salt)
    return digest
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    const isValid = await bcrypt.compare(plaintext, digest)
    return isValid
  }
}
