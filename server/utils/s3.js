import crypto from "crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const getS3Config = () => {
  const region = process.env.AWS_REGION;
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  if (!region || !bucketName) {
    throw new Error("S3 environment variables are not fully configured.");
  }

  return {
    region,
    bucketName,
    s3Client: new S3Client({ region }),
  };
};

const getS3PublicUrl = (bucketName, region, key) => {
  if (process.env.AWS_S3_PUBLIC_BASE_URL) {
    return `${process.env.AWS_S3_PUBLIC_BASE_URL.replace(/\/$/, "")}/${key}`;
  }

  return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
};

export const uploadImageToS3 = async (file) => {
  const { region, bucketName, s3Client } = getS3Config();

  const fileExtension = file.originalname.includes(".")
    ? file.originalname.split(".").pop()
    : "bin";
  const key = `posts/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );

  return getS3PublicUrl(bucketName, region, key);
};
