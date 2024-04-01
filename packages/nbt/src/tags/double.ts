import { BinaryStream, Endianness } from "@serenityjs/binaryutils";

import { Tag } from "../named-binary-tag";

import { NBTTag } from "./tag";

/**
 * A tag that contains a double value.
 */
class DoubleTag<T extends number = number> extends NBTTag<T> {
	public static readonly type = Tag.Double;

	public valueOf(snbt?: boolean): number | string {
		return snbt ? this.value + "d" : this.value;
	}

	/**
	 * Reads a double tag from the stream.
	 */
	public static read<T extends number = number>(
		stream: BinaryStream,
		varint = false,
		type = true
	): DoubleTag<T> {
		// Check if the type should be read.
		if (type) {
			// Read the type.
			// And check if the type is a double.
			const type = stream.readByte();
			if (type !== this.type) {
				throw new Error(`Expected tag type to be ${this.type} but got ${type}`);
			}
		}

		// Read the name.
		const name = this.readString(stream, varint);

		// Read the value.
		const value = stream.readFloat64(Endianness.Little);

		// Return the tag.
		return new DoubleTag(name, value as T);
	}

	/**
	 * Writes a double tag to the stream.
	 */
	public static write<T extends number = number>(
		stream: BinaryStream,
		tag: DoubleTag<T>,
		varint = false
	): void {
		// Write the type.
		stream.writeByte(this.type);

		// Write the name.
		this.writeString(tag.name, stream, varint);

		// Write the value.
		stream.writeFloat64(tag.value, Endianness.Little);
	}
}

export { DoubleTag };
