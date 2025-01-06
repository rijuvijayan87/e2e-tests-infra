FROM node:latest
WORKDIR /e2e
COPY package*.json ./
RUN mkdir -p /app
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm exec playwright install
RUN pnpm exec playwright install-deps
RUN rm -rf /e2e/node_modules
COPY . /e2e/
WORKDIR /e2e
ENTRYPOINT ["pnpm", "exec", "playwright"]
CMD ["test"]